using KolokwiumSurlas.API.Dtos;

namespace KolokwiumSurlas.API.Services
{
    public interface IMousesService
    {
        IEnumerable<MouseResponseDto> GetAll();
        void Delete(int id);
        void Create(MouseRequestDto requestDto);
    }
}
