using System;
using NodaTime;
using NodaTime.Extensions;
namespace DateTester
{
    public static class NodaTimeHelper
    {
        public static Instant ParseToInstant(string value) => DateTimeOffset.Parse(value).ToInstant();

        public static LocalDateTime ParseAsUtcToLocalDateTime(string value) => DateTime.Parse(value).AsUtcToLocalDateTime();

        public static Instant CreateInstant(int year, int month, int day, int hour = 0, int minute = 0, int second = 0, int millisecond = 0)
            => new DateTimeOffset(year, month, day, hour, minute, second, millisecond, TimeSpan.Zero).ToInstant();

        public static Instant ToInstantSafe(this DateTime dateTime, bool unspecifiedKindIsUtc = true)
        {
            var utc = dateTime.Kind == DateTimeKind.Local
                ? dateTime.ToUniversalTime()
                : dateTime.Kind == DateTimeKind.Utc
                ? dateTime
                : new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, dateTime.Hour, dateTime.Minute, dateTime.Second, dateTime.Millisecond, unspecifiedKindIsUtc ? DateTimeKind.Utc : DateTimeKind.Local);
            return utc.ToInstant();
        }

        public static LocalDateTime AsUtcToLocalDateTime(this DateTime dateTime)
        {
            var utc = dateTime.Kind switch
            {
                DateTimeKind.Utc => dateTime,
                DateTimeKind.Local => dateTime.ToUniversalTime(),
                DateTimeKind.Unspecified => new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, dateTime.Hour, dateTime.Minute, dateTime.Second, dateTime.Millisecond, DateTimeKind.Utc),
                _ => throw new ArgumentOutOfRangeException(nameof(dateTime), "Kind unknown")
            };

            return utc.ToLocalDateTime();
        }

        public static DateTime AsUtcToDateTime(this LocalDateTime localDateTime) => new DateTime(
            localDateTime.Year,
            localDateTime.Month,
            localDateTime.Day,
            localDateTime.Hour,
            localDateTime.Minute,
            localDateTime.Second,
            localDateTime.Millisecond,
            DateTimeKind.Utc
        );

        public static Instant AsUtcToInstant(this LocalDateTime localDateTime) =>
            localDateTime.AsUtcToDateTime().ToInstant();
    }
}