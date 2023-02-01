using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zoollar.Accounts.API.Migrations
{
    /// <inheritdoc />
    public partial class RemoveCompanyDetails4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Landlords_LandlordId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_Address_Lenders_LenderId",
                table: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Address_LandlordId",
                table: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Address_LenderId",
                table: "Address");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Address_LandlordId",
                table: "Address",
                column: "LandlordId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Address_LenderId",
                table: "Address",
                column: "LenderId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Landlords_LandlordId",
                table: "Address",
                column: "LandlordId",
                principalTable: "Landlords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Lenders_LenderId",
                table: "Address",
                column: "LenderId",
                principalTable: "Lenders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
