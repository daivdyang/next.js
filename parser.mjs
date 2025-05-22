import path from 'node:path'
import fs from 'node:fs'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import addClasses from 'rehype-add-classes'

const fullPath = path.join('./posts/2024-11-08-01.md')
const fileContent = fs.readFileSync(fullPath, 'utf8')

// just for local testing
const processContent = await unified()
	.use(remarkParse)
	.use(remark2rehype)
	.use(addClasses, {
		h1: 'p',
		code: 'qqq',
		p: 'px-1'
	})
	.use(rehypeStringify)
	.process(fileContent)

console.log(processContent)