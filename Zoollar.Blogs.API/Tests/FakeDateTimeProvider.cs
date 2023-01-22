using Zoollar.Blogs.API.Common;

namespace Zoollar.Blogs.API.Tests
{
    public class FakeDateTimeProvider : IDateTimeProvider
    {
        private DateTime now;

        public FakeDateTimeProvider(DateTime now)
        {
            this.now = now;
        }

        public DateTime GetDateTimeNow()
        {
            return this.now;
        }
    }
}
