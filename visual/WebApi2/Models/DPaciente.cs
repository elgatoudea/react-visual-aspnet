using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi2.Models
{
    public class DPaciente
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Nombres { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Apellidos { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string TipoDocumento { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string NumDocumento { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string FechaNacimiento { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string ContactoEstrecho1 { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string Viajo { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string ViajeNivel { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Destino { get; set; }  

    }
}
