using System.Linq;

namespace Kata.Prod
{
    public static class FizzBuzz
    {
        public static string Generate(int number)
        {
            switch (GetDividorsPattern(number, 3, 5))
            {
                case "3, _": return "Fizz";
                case "_, 5": return "Buzz";
                case "3, 5": return "FizzBuzz";
                default : return $"{number}";
            }
        }

        private static string GetDividorsPattern(int number, params int[] dividors)
        {
            return dividors.Select(dividor => GetDividorPattern(number, dividor))
                           .Join(", ");
        }

        private static string GetDividorPattern(int number, int dividor)
        {
            return number % dividor == 0
                ? $"{dividor}"
                : "_";
        }
    }
}