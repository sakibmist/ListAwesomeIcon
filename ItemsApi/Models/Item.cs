using System;
using System.ComponentModel.DataAnnotations;

namespace ItemsApi.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        public decimal Price { get; set; }
        public DateTime CreatedAt { get; set; }=DateTime.Now;


    }
}