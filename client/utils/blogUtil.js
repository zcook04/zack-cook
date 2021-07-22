import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'blogs')

export function getBlogFiles() {
    return fs.readdirSync(blogDirectory)
}

export function getBlogData(filename) {
    const filePath = path.join(blogDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)
    const blogSlug = filename.replace(/\.md$/, '')

    const blogData = {
        slug: blogSlug,
        ...data,
        content
    }

    return blogData
}

export function getAllBlogs() {
    const blogs = getBlogFiles()
    const allBlogs = blogs.map(blog => getBlogData(blog));
    const sortedBlogs = allBlogs.sort((blogA, blogB) => blogA.date > blogB.date ? -1 : 1);
    return sortedBlogs;
}

export function getFeaturedBlogs() {
    const allBlogs = getAllBlogs()
    const featuredBlogs = allBlogs.filter((blog) => blog.isFeatured)
    return featuredBlogs
}