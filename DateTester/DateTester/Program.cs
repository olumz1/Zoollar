using DateTester;
using NodaTime;
using Npgsql;
using System;
using System.Globalization;
using System.Reflection.Metadata.Ecma335;

public class Example1
{
    private static string ConnectionStringBase(string host)
    {
        return $"Host={host};Database=RepertoireRights;Username=RepertoireRightsUser;Password=sERP_jCVZ0dMrA;Port=5432;Persist Security Info=True";
    }
    
    public static void Main()
    {
        var ConnectionStringNoPooling = $"{ConnectionStringBase("gr4o-nonprod-gr4o-rrs-qa-rrs.cluster-cyzxzluq0fq4.us-east-1.rds.amazonaws.com")};Pooling=false;Timeout=30;CommandTimeout=60;KeepAlive=60";
       DateTime releaseRightsCreatedTime = new DateTime();

        using var conn = new NpgsqlConnection(ConnectionStringNoPooling);
        conn.Open();
        var commandText = @$"SELECT p.""IncomingCreatedTime"" FROM public.""GrsReleaseAudits"" p 
                                    WHERE p.""ExternalId"" = '33584627126' UNION SELECT p.""IncomingCreatedTime"" FROM public.""_archive_GrsReleaseAudits"" p 
                                    WHERE p.""ExternalId"" = '33584627126' ORDER BY ""IncomingCreatedTime"" ASC LIMIT 1";
        Console.WriteLine(commandText);
        using NpgsqlCommand command = new NpgsqlCommand(commandText, conn);
        NpgsqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Console.WriteLine("The value from the executed query");
            //releaseRightsCreatedTime = Convert.ToDateTimeOffset((DateTime)reader[0]);
            Instant releaseRightsCreatedTime2 = NodaTimeHelper.ParseToInstant((DateTime)reader[0]);
            Console.WriteLine(releaseRightsCreatedTime);
        }
        //var result = DateTime.TryParse(releaseRightsCreatedTime., out DateTime dateResult);
        var test = $"{releaseRightsCreatedTime.AsUtcToLocalDateTime():o}";
        reader.Close();
        conn.Close();

        Console.WriteLine(test);
    }
}