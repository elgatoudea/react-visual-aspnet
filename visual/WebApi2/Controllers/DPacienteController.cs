using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi2.Models;

namespace WebApi2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DPacienteController : ControllerBase
    {
        private readonly BDCovid19 _context;

        public DPacienteController(BDCovid19 context)
        {
            _context = context;
        }

        // GET: api/DPaciente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DPaciente>>> GetDPacientes()
        {
            return await _context.DPacientes.ToListAsync();
        }

        // GET: api/DPaciente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DPaciente>> GetDPaciente(int id)
        {
            var dPaciente = await _context.DPacientes.FindAsync(id);

            if (dPaciente == null)
            {
                return NotFound();
            }

            return dPaciente;
        }

        // PUT: api/DPaciente/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDPaciente(int id, DPaciente dPaciente)
        {
            dPaciente.Id = id;

            _context.Entry(dPaciente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DPacienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DPaciente
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DPaciente>> PostDPaciente(DPaciente dPaciente)
        {
            _context.DPacientes.Add(dPaciente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDPaciente", new { id = dPaciente.Id }, dPaciente);
        }

        // DELETE: api/DPaciente/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DPaciente>> DeleteDPaciente(int id)
        {
            var dPaciente = await _context.DPacientes.FindAsync(id);
            if (dPaciente == null)
            {
                return NotFound();
            }

            _context.DPacientes.Remove(dPaciente);
            await _context.SaveChangesAsync();

            return dPaciente;
        }

        private bool DPacienteExists(int id)
        {
            return _context.DPacientes.Any(e => e.Id == id);
        }
    }
}
