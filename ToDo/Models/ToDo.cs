using System;
using System.Collections.Generic;

namespace ToDoApp.Models
{
    public partial class ToDo
    {
        public int Id { get; set; }
        public Guid UniqueId { get; set; }
        public string Name { get; set; }
        public int StatusId { get; set; }
        public string Owner { get; set; }
        public DateTime CreatedOn { get; set; }

        public virtual Status Status { get; set; }
    }
}
