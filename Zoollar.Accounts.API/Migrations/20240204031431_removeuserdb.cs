using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class removeuserdb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Users_UserId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_AlertAndSearches_Users_UserId",
                table: "AlertAndSearches");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Address_UserId",
                table: "Address");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "AlertAndSearches",
                newName: "AccountId");

            migrationBuilder.RenameIndex(
                name: "IX_AlertAndSearches_UserId",
                table: "AlertAndSearches",
                newName: "IX_AlertAndSearches_AccountId");

            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailAdress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TelephoneNumber = table.Column<long>(type: "bigint", nullable: false),
                    MyStatus = table.Column<int>(type: "int", nullable: false),
                    EmailPreferences = table.Column<int>(type: "int", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AccountType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegistrationComplete = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Accounts_AddressId",
                table: "Address",
                column: "AddressId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AlertAndSearches_Accounts_AccountId",
                table: "AlertAndSearches",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Accounts_AddressId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_AlertAndSearches_Accounts_AccountId",
                table: "AlertAndSearches");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.RenameColumn(
                name: "AccountId",
                table: "AlertAndSearches",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_AlertAndSearches_AccountId",
                table: "AlertAndSearches",
                newName: "IX_AlertAndSearches_UserId");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EmailAdress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailPreferences = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MyStatus = table.Column<int>(type: "int", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TelephoneNumber = table.Column<long>(type: "bigint", nullable: false),
                    AccountType = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_UserId",
                table: "Address",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Users_UserId",
                table: "Address",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AlertAndSearches_Users_UserId",
                table: "AlertAndSearches",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
