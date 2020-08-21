using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi2.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DPacientes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombres = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Apellidos = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    TipoDocumento = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    NumDocumento = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    FechaNacimiento = table.Column<DateTime>(type: "date", nullable: false),
                    ContactoEstrecho1 = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    Viajo = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    ViajeNivel = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    Destino = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DPacientes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DPacientes");
        }
    }
}
