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
        public void Return_Given_Number_When_Not_Divisible_By_3_And_5(int number)
        {
            var result = FizzBuzz.Compute(number);
            Check.That(result)
                 .Equals($"{number}");
        }
    }
}
