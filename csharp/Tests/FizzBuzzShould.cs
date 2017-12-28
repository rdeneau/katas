using Kata.Prod;
using NFluent;
using Xunit;

namespace Kata.Tests
{
    public class FizzBuzzShould
    {
        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(4)]
        public void Return_The_Given_Number_When_Not_Divisible_By_3_And_5(int number)
        {
            var result = FizzBuzz.Generate(number);
            Check.That(result)
                 .Equals($"{number}");
        }

        [Theory]
        [InlineData(3)]
        [InlineData(6)]
        [InlineData(9)]
        public void Fizz_Given_A_Number_When_Divisible_By_3_But_Not_By_5(int number)
        {
            var result = FizzBuzz.Generate(number);
            Check.That(result)
                 .Equals("Fizz");
        }

        [Theory]
        [InlineData(5)]
        [InlineData(10)]
        [InlineData(20)]
        public void Buzz_Given_A_Number_When_Divisible_By_5_But_Not_By_3(int number)
        {
            var result = FizzBuzz.Generate(number);
            Check.That(result)
                 .Equals("Buzz");
        }

        [Theory]
        [InlineData(15)]
        [InlineData(30)]
        [InlineData(45)]
        public void Buzz_Given_A_Number_When_Divisible_By_3_And_By_5(int number)
        {
            var result = FizzBuzz.Generate(number);
            Check.That(result)
                 .Equals("FizzBuzz");
        }
    }
}
