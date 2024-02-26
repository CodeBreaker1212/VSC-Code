using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace CSharpTest
{
    class Program
    {
        static void Main(string[] args)
        {
            int randomNumber;
            Random rng = new Random();
            randomNumber = rng.Next(1, 7);

            string name = "John";


            Console.WriteLine(name + " your random number is: ");
            Console.WriteLine(randomNumber);
            Console.
        }
    }
}