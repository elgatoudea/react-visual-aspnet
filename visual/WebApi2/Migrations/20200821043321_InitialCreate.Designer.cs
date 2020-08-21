﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApi2.Models;

namespace WebApi2.Migrations
{
    [DbContext(typeof(BDCovid19))]
    [Migration("20200821043321_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApi2.Models.DPaciente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Apellidos")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ContactoEstrecho1")
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("Destino")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("FechaNacimiento")
                        .HasColumnType("date");

                    b.Property<string>("Nombres")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("NumDocumento")
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("TipoDocumento")
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("ViajeNivel")
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("Viajo")
                        .HasColumnType("nvarchar(3)");

                    b.HasKey("Id");

                    b.ToTable("DPacientes");
                });
#pragma warning restore 612, 618
        }
    }
}
