using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppTest
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    /* [DataContract(Name = "repo")]
     public class Repository
     {

     }*/
    [DataContract(Name = "productos")]
    public class JsonProducto
    {
      private string _name;
      [DataMember(Name = "Nombre")]
      public string Nombre { get { return this._name; } set { this._name = value; } }
    }

    private static async Task<List<JsonProducto>> ProcesarProductos()
    {
      var client = new HttpClient();
      client.DefaultRequestHeaders.Accept.Clear();
      client.DefaultRequestHeaders.Accept.Add(
          new MediaTypeWithQualityHeaderValue("application/producto+json"));
      client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");
      var serializer = new DataContractJsonSerializer(typeof(List<JsonProducto>));
      var streamTask = client.GetStreamAsync("http://localhost:50672/api/Producto");
      var productos = serializer.ReadObject(await streamTask) as List<JsonProducto>;
      foreach (var producto in productos)
      {
        Console.Write("ProcesarProductos->"+producto.Nombre+" | ");
      }
      Console.WriteLine("FIN");
      return productos;
      //var msg = await stringTask;
    }


    [HttpGet]
    public IEnumerable<string> Get()
    {
      Console.WriteLine("ValuesController->GET");
     // return new string[] { "valor1","valor2"};
      var productos = ProcesarProductos().Result;
      return productos.Select(item => item.Nombre).ToList();
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }

  }
}
