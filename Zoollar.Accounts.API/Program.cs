using Microsoft.EntityFrameworkCore;
using Zoollar.Accounts.API.Common;
using Zoollar.Accounts.API.Data;
using Zoollar.Accounts.API.Models.Entities;
using Zoollar.Accounts.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AccountDbContext>(
    options =>
    options.UseSqlServer
    (builder.Configuration.GetConnectionString("AccountsDbConnectionString")));
builder.Services.AddScoped<IDateTimeProvider, DateTimeProvider>();
builder.Services.AddScoped<IAccountServices, AccountServices>();
builder.Services.AddTransient(typeof(AccountRepo<>));

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
