using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class updateUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AddressId",
                table: "Lenders",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "AddressId",
                table: "EstateAgents",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "LandlordId",
                table: "Address",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Lenders_AddressId",
                table: "Lenders",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_EstateAgents_AddressId",
                table: "EstateAgents",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_LandlordId",
                table: "Address",
                column: "LandlordId");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Landlords_LandlordId",
                table: "Address",
                column: "LandlordId",
                principalTable: "Landlords",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Users_AddressId",
                table: "Address",
                column: "AddressId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EstateAgents_Address_AddressId",
                table: "EstateAgents",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "AddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lenders_Address_AddressId",
                table: "Lenders",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "AddressId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Landlords_LandlordId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_Address_Users_AddressId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_EstateAgents_Address_AddressId",
                table: "EstateAgents");

            migrationBuilder.DropForeignKey(
                name: "FK_Lenders_Address_AddressId",
                table: "Lenders");

            migrationBuilder.DropIndex(
                name: "IX_Lenders_AddressId",
                table: "Lenders");

            migrationBuilder.DropIndex(
                name: "IX_EstateAgents_AddressId",
                table: "EstateAgents");

            migrationBuilder.DropIndex(
                name: "IX_Address_LandlordId",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "AddressId",
                table: "Lenders");

            migrationBuilder.DropColumn(
                name: "AddressId",
                table: "EstateAgents");

            migrationBuilder.DropColumn(
                name: "LandlordId",
                table: "Address");
        }
    }
}
