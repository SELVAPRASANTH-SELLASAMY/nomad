import { create } from "zustand";

export const useBlogManager = create((set,get) => ({
    blogs: [],
    hasMore: false,
    filters: {
        page: 1,
        category: "All",
        sort: {label:"name",value:"title"},
        sortOrder: 1,
        search: ""
    },
    cachedFilters: "",
    addBlogs: (newBlogs) => set({
        blogs: [...get().blogs,...newBlogs],
        cachedFilters: JSON.stringify(get().filters)
    }),
    deleteBlog: (blogId) => set({
        blogs: get().blogs.filter(blog => blog._id !== blogId)
    }),
    clearBlogs: () => set({blogs: [],page: 1}),
    setHasMore: (prop) => set({hasMore: prop}),
    incPage: () => set({
        filters: {...get().filters,page: get().filters.page + 1}
    }),
    setCategory: (category) => set({
        filters: {...get().filters,category: category}
    }),
    setSort: (sort) => set({
        filters: {...get().filters,sort: sort}
    }),
    changeSortOrder: () => set({
        filters: {...get().filters,sortOrder: 0 - get().filters.sortOrder}
    }),
    handleSearch: (input) => set({
        filters: {...get().filters,search:input}
    })
}));