using Microsoft.EntityFrameworkCore;
using Zoollar.Properties.API.Data;
using Zoollar.Properties.API.Helpers;
using Zoollar.Properties.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddDbContextPool<PropertiesDbContext>(
    options =>
    options.UseNpgsql
    (builder.Configuration.GetConnectionString("PropertiesDbConnectionString")));
builder.Services.AddScoped<IPropertyRepo, PropertyRepo>();
builder.Services.AddScoped<IPropertyService, PropertyService>();
builder.Services.AddScoped<IDateTimeProvider, DateTimeProvider>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
