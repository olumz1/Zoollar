using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEstateDetailsUp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyDetails_EstateAgents_CompanyDetailsId",
                table: "CompanyDetails");

            migrationBuilder.RenameColumn(
                name: "CompanyDetailsId",
                table: "CompanyDetails",
                newName: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyDetails_EstateAgents_Id",
                table: "CompanyDetails",
                column: "Id",
                principalTable: "EstateAgents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyDetails_EstateAgents_Id",
                table: "CompanyDetails");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CompanyDetails",
                newName: "CompanyDetailsId");

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyDetails_EstateAgents_CompanyDetailsId",
                table: "CompanyDetails",
                column: "CompanyDetailsId",
                principalTable: "EstateAgents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
