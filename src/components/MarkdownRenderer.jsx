function MarkdownRenderer({ content }) {
  // Simple markdown renderer for our content
  const renderContent = (text) => {
    const lines = text.trim().split('\n')
    const elements = []
    let inCodeBlock = false
    let codeContent = []
    let inTable = false
    let tableRows = []
    let listItems = []
    let inList = false

    const processInlineFormatting = (text) => {
      // Bold
      text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Italic
      text = text.replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Code
      text = text.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-indigo-600">$1</code>')
      return text
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }} />
            ))}
          </ul>
        )
        listItems = []
      }
      inList = false
    }

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headerRow = tableRows[0]
        const dataRows = tableRows.slice(2) // Skip header and separator
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  {headerRow.split('|').filter(cell => cell.trim()).map((cell, i) => (
                    <th key={i} className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.split('|').filter(cell => cell.trim()).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 text-sm text-gray-600 border-b"
                        dangerouslySetInnerHTML={{ __html: processInlineFormatting(cell.trim()) }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        tableRows = []
      }
      inTable = false
    }

    lines.forEach((line, index) => {
      // Code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
              <code>{codeContent.join('\n')}</code>
            </pre>
          )
          codeContent = []
          inCodeBlock = false
        } else {
          flushList()
          flushTable()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeContent.push(line)
        return
      }

      // Tables
      if (line.trim().startsWith('|')) {
        flushList()
        inTable = true
        tableRows.push(line)
        return
      } else if (inTable) {
        flushTable()
      }

      // Empty lines
      if (line.trim() === '') {
        flushList()
        return
      }

      // Headers
      if (line.startsWith('# ')) {
        flushList()
        elements.push(
          <h1 key={`h1-${index}`} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            {line.slice(2)}
          </h1>
        )
        return
      }
      if (line.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={`h2-${index}`} className="text-xl font-bold text-gray-900 mb-3 mt-6">
            {line.slice(3)}
          </h2>
        )
        return
      }
      if (line.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={`h3-${index}`} className="text-lg font-semibold text-gray-800 mb-2 mt-4">
            {line.slice(4)}
          </h3>
        )
        return
      }

      // List items
      if (line.trim().startsWith('- ') || line.trim().match(/^\d+\. /)) {
        inList = true
        const content = line.trim().replace(/^-\s+/, '').replace(/^\d+\.\s+/, '')
        listItems.push(content)
        return
      }

      // Paragraphs
      flushList()
      elements.push(
        <p
          key={`p-${index}`}
          className="text-gray-700 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processInlineFormatting(line) }}
        />
      )
    })

    // Flush any remaining items
    flushList()
    flushTable()

    return elements
  }

  return <div className="prose-custom">{renderContent(content)}</div>
}

export default MarkdownRenderer
