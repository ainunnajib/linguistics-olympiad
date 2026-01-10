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
      text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink-100 font-semibold">$1</strong>')
      // Italic
      text = text.replace(/\*(.+?)\*/g, '<em class="text-ink-200 italic">$1</em>')
      // Code
      text = text.replace(/`(.+?)`/g, '<code class="bg-navy-700/50 border border-navy-600/50 px-1.5 py-0.5 rounded text-sm font-mono text-amber-400">$1</code>')
      return text
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 mb-6 text-ink-300">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-amber-500 mt-1.5">•</span>
                <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }} />
              </li>
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
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-6 rounded-xl border border-navy-700/50">
            <table className="min-w-full">
              <thead className="bg-navy-800/50">
                <tr>
                  {headerRow.split('|').filter(cell => cell.trim()).map((cell, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-ink-200 border-b border-navy-700/50">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-navy-800/20' : 'bg-navy-800/40'}>
                    {row.split('|').filter(cell => cell.trim()).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-3 text-sm text-ink-300 border-b border-navy-700/30"
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
            <pre key={`code-${index}`} className="bg-navy-950 border border-navy-700/50 text-ink-200 p-4 rounded-xl overflow-x-auto mb-6 text-sm font-mono">
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
          <h1 key={`h1-${index}`} className="font-serif text-2xl font-bold text-ink-100 mb-4 mt-8 first:mt-0">
            {line.slice(2)}
          </h1>
        )
        return
      }
      if (line.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={`h2-${index}`} className="font-serif text-xl font-bold text-ink-100 mb-3 mt-8 first:mt-0">
            {line.slice(3)}
          </h2>
        )
        return
      }
      if (line.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={`h3-${index}`} className="font-serif text-lg font-semibold text-ink-200 mb-2 mt-6 first:mt-0">
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
          className="text-ink-300 mb-4 leading-relaxed"
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
