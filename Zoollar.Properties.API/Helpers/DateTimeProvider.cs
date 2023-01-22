namespace Zoollar.Properties.API.Helpers
{
    public class DateTimeProvider : IDateTimeProvider
    {
        public DateTime GetDateTimeNow()
        {
            return DateTime.Now;
        }
    }
}
