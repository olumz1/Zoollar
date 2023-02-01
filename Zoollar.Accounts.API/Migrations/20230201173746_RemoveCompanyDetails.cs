using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class RemoveCompanyDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_CompanyDetails_CompanyDetailsId",
                table: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Address_CompanyDetailsId",
                table: "Address");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Address_CompanyDetailsId",
                table: "Address",
                column: "CompanyDetailsId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_CompanyDetails_CompanyDetailsId",
                table: "Address",
                column: "CompanyDetailsId",
                principalTable: "CompanyDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
