using System.Collections.Generic;
using System.Linq;

namespace Kata.Prod
{
    public static class FizzBuzz
    {
        public static string Generate(int number)
        {
            switch (IsDivisibleBy(number, 3, 5))
            {
                case "3,_": return "Fizz";
                case "_,5": return "Buzz";
                case "3,5": return "FizzBuzz";
                default : return $"{number}";
            }
        }

        private static string IsDivisibleBy(int number, params int[] dividors)
        {
            return dividors.Select(dividor => IsDivisibleBySingle(number, dividor))
                           .Join(",");
        }

        private static string IsDivisibleBySingle(int number, int dividor)
        {
            return number % dividor == 0
                ? $"{dividor}"
                : "_";
        }

        private static string Join<T>(this IEnumerable<T> @this, string separator)
        {
            return string.Join(separator, @this);
        }
    }
}