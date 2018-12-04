using System.Collections.Generic;
using System.Linq;
using ItemsApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ItemsApi.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ItemsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public IActionResult GetAllData()
        {
            try
            {
                var items = _dataContext.Items.OrderByDescending(s=>s.Id).ToList();
                return Ok(items); //200
            }
            catch (System.Exception)
            {
                return BadRequest(); //400
            }
        }

        [HttpGet("{id}", Name = "GetData")]
        public IActionResult GetDataById(int id)
        {
            try
            {
                var data = _dataContext.Items.FirstOrDefault(x => x.Id == id);
                return Ok(data); //200
            }
            catch (System.Exception)
            {

                return BadRequest(); //400
            }
        }

        [HttpPost]
        public IActionResult AddData(Item item)
        {
            try
            {
                if (item == null) return BadRequest(); //404
                _dataContext.Add(item);
                _dataContext.SaveChanges();
                return Ok(item); //201
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost("batch-items")]
        public IActionResult AddBatchData(IEnumerable<Item> items)
        {
            try
            {
                if (items == null) return BadRequest(); //404
                _dataContext.AddRange(items);
                _dataContext.SaveChanges();
                return Ok(); //201
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }


        // [HttpGet("check/{accountNo}")]
        // public IActionResult CheckIsAccountNoExists(string accountNo)
        // {
        //     try
        //     {
        //         var isExist = _dataContext.Items.Any(x => x.AccountNo.ToLower() == accountNo.ToLower());
        //         return Ok(new { IsExist = isExist }); //200
        //     }
        //     catch (System.Exception)
        //     {

        //         return BadRequest(); //400
        //     }
        // }

        // [HttpDelete("{id}")]
        // public IActionResult DeleteById(int id)
        // {
        //     try
        //     {
        //         var data = _dataContext.Customers.FirstOrDefault(x => x.Id == id);
        //         if (data == null) return null;
        //         _dataContext.Customers.Remove(data);
        //         _dataContext.SaveChanges();
        //         return Ok(); //200
        //     }
        //     catch (System.Exception)
        //     {
        //         return BadRequest(); // 400
        //     }
        // }

        // [HttpPut("{id}")]
        // public IActionResult UpdateData(int id, Customer customer)
        // {
        //     try
        //     {
        //         if (id != customer.Id) return BadRequest("Invalid Data"); // validation status 400
        //         var data = _dataContext.Customers.FirstOrDefault(x => x.Id == id);
        //         if (data == null) return NotFound(); // 404
        //         data.Name = customer.Name;
        //         _dataContext.Customers.Update(data);
        //         _dataContext.SaveChanges();
        //         return NoContent(); // 204
        //     }
        //     catch (System.Exception)
        //     {
        //         return BadRequest("Error occured"); //400
        //     }
        // }
    }
}