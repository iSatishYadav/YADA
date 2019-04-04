using System;
using System.Collections.Generic;

namespace ToDoApp.Models
{
    public partial class Status
    {
        public Status()
        {
            ToDo = new HashSet<ToDo>();
        }

        public int Id { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<ToDo> ToDo { get; set; }
    }
}
