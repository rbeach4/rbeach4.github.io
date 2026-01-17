import { visit } from 'unist-util-visit'
import type { Root } from 'mdast'
import yaml from 'js-yaml'

export function remarkFrontmatterExport() {
  return (tree: Root) => {
    let frontmatter = {}

    visit(tree, 'yaml', (node: any) => {
      frontmatter = yaml.load(node.value) || {}
    })

    // Add export statement to the tree
    if (Object.keys(frontmatter).length > 0) {
      tree.children.unshift({
        type: 'mdxjsEsm',
        value: '',
        data: {
          estree: {
            type: 'Program',
            body: [
              {
                type: 'ExportNamedDeclaration',
                declaration: {
                  type: 'VariableDeclaration',
                  declarations: [
                    {
                      type: 'VariableDeclarator',
                      id: { type: 'Identifier', name: 'frontmatter' },
                      init: {
                        type: 'ObjectExpression',
                        properties: Object.entries(frontmatter).map(([key, value]) => ({
                          type: 'Property',
                          method: false,
                          shorthand: false,
                          computed: false,
                          key: { type: 'Identifier', name: key },
                          value: valueToEstree(value),
                          kind: 'init'
                        }))
                      }
                    }
                  ],
                  kind: 'const'
                },
                specifiers: [],
                source: null
              }
            ],
            sourceType: 'module'
          }
        }
      } as any)
    }
  }
}

function valueToEstree(value: any): any {
  if (typeof value === 'string') {
    return { type: 'Literal', value }
  }
  if (typeof value === 'number') {
    return { type: 'Literal', value }
  }
  if (typeof value === 'boolean') {
    return { type: 'Literal', value }
  }
  if (Array.isArray(value)) {
    return {
      type: 'ArrayExpression',
      elements: value.map(v => valueToEstree(v))
    }
  }
  if (typeof value === 'object' && value !== null) {
    return {
      type: 'ObjectExpression',
      properties: Object.entries(value).map(([k, v]) => ({
        type: 'Property',
        method: false,
        shorthand: false,
        computed: false,
        key: { type: 'Identifier', name: k },
        value: valueToEstree(v),
        kind: 'init'
      }))
    }
  }
  return { type: 'Literal', value: null }
}
