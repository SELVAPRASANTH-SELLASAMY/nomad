import { create } from "zustand";

export const useBlogManager = create((set) => ({
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
    addBlogs: (newBlogs) => set((state) => ({
        blogs: [...state.blogs,...newBlogs],
        cachedFilters: JSON.stringify(state.filters)
    })),
    deleteBlog: (blogId) => set((state) => ({
        blogs: state.blogs.filter(blog => blog._id !== blogId)
    })),
    setHasMore: (prop) => set({hasMore: prop}),
    incPage: () => set((state) => ({
        filters: {...state.filters,page: state.filters.page + 1}
    })),
    setCategory: (category) => set((state) => ({
        filters: {...state.filters,category: category, page: 1},
        blogs: []
    })),
    setSort: (sort) => set((state) => ({
        filters: {...state.filters,sort: sort, page: 1},
        blogs: []
    })),
    changeSortOrder: () => set((state) => ({
        filters: {...state.filters,sortOrder: 0 - state.filters.sortOrder, page: 1},
        blogs: []
    })),
    handleSearch: (input) => set((state) => ({
        filters: {...state.filters,search:input, page: 1},
        blogs: []
    }))
}));