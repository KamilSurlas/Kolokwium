using KolokwiumSurlas.API.Dtos;
using KolokwiumSurlas.API.Models;

namespace KolokwiumSurlas.API.Services
{
    public class MousesService : IMousesService
    {
        private static List<Mouse> mouses = new List<Mouse>
            {
                new Mouse { Id = 1, Model = "Model 1", DPI = 800 },
                new Mouse { Id = 2, Model = "Model 2", DPI = 1600 },
                new Mouse { Id = 3, Model = "Model 3", DPI = 2400 },
                new Mouse { Id = 4, Model = "Model 4", DPI = 7000 },
                new Mouse { Id = 5, Model = "Model 5", DPI = 5000},        
                new Mouse { Id = 6, Model = "Model 6", DPI = 2000},        
                new Mouse { Id = 7, Model = "Model 7", DPI = 1000},        
                new Mouse { Id = 8, Model = "Model 8", DPI = 1600},        
                new Mouse { Id = 9, Model = "Model 9", DPI = 5900},        
                new Mouse { Id = 10, Model = "Model 10", DPI = 16000}            
            };
        public void Create(MouseRequestDto requestDto)
        {
            var newMouse = new Mouse
            {
                DPI = requestDto.DPI,
                Model = requestDto.Model,
                Id = mouses.Max(m => m.Id) + 1
            };
            mouses.Add(newMouse);
        }

        public void Delete(int id)
        {
            var toDelete = GetMouse(id);
            mouses.Remove(toDelete);
        }
        private Mouse GetMouse(int id)
        {
            var mouse = mouses.Find(m => m.Id == id);
            if (mouse is null)
                throw new Exception($"Nie odnaleziono myszki o id: {id}");

            return mouse;
        }
        public IEnumerable<MouseResponseDto> GetAll()
        {
            return mouses.Select(m => ToDto(m));
        }
        private MouseResponseDto ToDto(Mouse m)
        {
            return new MouseResponseDto
            {
                Id = m.Id,
                DPI = m.DPI,
                Model = m.Model
            };
        }
    }
}
