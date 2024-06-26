using KolokwiumSurlas.API.Dtos;
using KolokwiumSurlas.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace KolokwiumSurlas.API.Controllers
{
    [ApiController]
    [Route("api/mouses")]
    public class MyszkiController : ControllerBase
    {
        private readonly IMousesService _mousesService;

        public MyszkiController(IMousesService mousesService)
        {
            _mousesService = mousesService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<MouseResponseDto>> GetAll()
        {
            var response = _mousesService.GetAll();
            return Ok(response);
        }
        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            try
            {
                _mousesService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }


        }
        [HttpPost]
        public ActionResult Create([FromBody] MouseRequestDto dto)
        {
            _mousesService.Create(dto);
            return NoContent();

        }      
    }
}
