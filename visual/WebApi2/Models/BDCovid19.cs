using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi2.Models
{
    public class BDCovid19:DbContext
    {
        public BDCovid19(DbContextOptions<BDCovid19> options) : base(options)
        {

        }

        public DbSet<DPaciente> DPacientes { get; set; }
    }
}
