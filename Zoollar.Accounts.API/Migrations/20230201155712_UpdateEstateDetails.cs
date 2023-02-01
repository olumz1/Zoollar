using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEstateDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyDetails_EstateAgents_Id",
                table: "CompanyDetails");

            migrationBuilder.AddColumn<Guid>(
                name: "EstateAgentId",
                table: "CompanyDetails",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_CompanyDetails_EstateAgentId",
                table: "CompanyDetails",
                column: "EstateAgentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyDetails_EstateAgents_EstateAgentId",
                table: "CompanyDetails",
                column: "EstateAgentId",
                principalTable: "EstateAgents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyDetails_EstateAgents_EstateAgentId",
                table: "CompanyDetails");

            migrationBuilder.DropIndex(
                name: "IX_CompanyDetails_EstateAgentId",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "EstateAgentId",
                table: "CompanyDetails");

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyDetails_EstateAgents_Id",
                table: "CompanyDetails",
                column: "Id",
                principalTable: "EstateAgents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
