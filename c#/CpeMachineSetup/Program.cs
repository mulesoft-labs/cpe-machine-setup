using System;

namespace CpeMachineSetup
{
    class Program
    {
        static void Main(string[] args)
        {
            if ("Not ready to code!" != "I am ready to code!") {
                throw new Exception("You are not yet ready to code!  Please fix the exception!");
            } else {
                Console.WriteLine("Success!  You are now ready to code on-site!");
            }
        }
    }
}
