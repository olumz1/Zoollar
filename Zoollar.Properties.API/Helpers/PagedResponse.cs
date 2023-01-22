namespace Zoollar.Properties.API.Helpers
{
    public class PagedResponse<T> : List<T>
    {
        public int PageNumber { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public bool HasPrevious => CurrentPage > 1;
        public bool HasNext => CurrentPage < PageSize;
        public Uri FirstPage { get; set; }
        public Uri LastPage { get; set; }
        public int TotalPages { get; set; }
        public int TotalRecords { get; set; }
        public Uri NextPage { get; set; }
        public Uri PreviousPage { get; set; }
        public T Data { get; set; }
        public PagedResponse(List<T> data, int count, int pageNumber, int pageSize)
        {
            TotalRecords = count;
            PageNumber = pageNumber;
            PageSize = pageSize;
            CurrentPage= pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            
            AddRange(data);
        }

        public static PagedResponse<T> ToPagedResponse(IQueryable<T> query, int pageNumber, int pageSize) 
        {
            var count = query.Count();
            var items = query.Skip((pageNumber - 1)* pageSize)
                .Take(pageSize)
                .ToList();
            return new PagedResponse<T>(items, count, pageNumber, pageSize);
        }
    }
}
