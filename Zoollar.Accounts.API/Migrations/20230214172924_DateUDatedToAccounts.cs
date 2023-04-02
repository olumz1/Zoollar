using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class DateUDatedToAccounts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AlertAndSearches_Users_UserId",
                table: "AlertAndSearches");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "Users",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "Lenders",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "Landlords",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "EstateAgents",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "AccountInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AlertAndSearches_Users_UserId",
                table: "AlertAndSearches",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AlertAndSearches_Users_UserId",
                table: "AlertAndSearches");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "Lenders");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "Landlords");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "EstateAgents");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "AccountInfo");

            migrationBuilder.AddForeignKey(
                name: "FK_AlertAndSearches_Users_UserId",
                table: "AlertAndSearches",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
