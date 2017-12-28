using System;
using FsCheck;
using FsCheck.Xunit;
using Kata.Prod;

namespace Kata.Tests
{
    public class FizzBuzzTests
    {
        public class GenerateShould
        {
            [Property(Arbitrary = new []{ typeof(Multiples.Others) })]
            public bool Return_The_Given_Number_When_Not_Divisible_By_3_And_5(int number)
            {
                return FizzBuzz.Generate(number) == $"{number}";
            }

            [Property(Arbitrary = new []{ typeof(Multiples.Of3Not5) })]
            public bool Fizz_Given_A_Number_When_Divisible_By_3_But_Not_By_5(int number)
            {
                return FizzBuzz.Generate(number) == "Fizz";
            }

            [Property(Arbitrary = new []{ typeof(Multiples.Of5Not3) })]
            public bool Buzz_Given_A_Number_When_Divisible_By_5_But_Not_By_3(int number)
            {
                return FizzBuzz.Generate(number) == "Buzz";
            }

            [Property(Arbitrary = new []{ typeof(Multiples.Of3And5) })]
            public bool FizzBuzz_Given_A_Number_When_Divisible_By_3_And_By_5(int number)
            {
                return FizzBuzz.Generate(number) == "FizzBuzz";
            }

            public static class Multiples
            {
                public static class Of3Not5
                {
                    public static Arbitrary<int> Int()
                    {
                        return Arb.Default.Int32()
                                  .Filter(And(
                                      IsDisibleBy(3),
                                      Not(IsDisibleBy(5))));
                    }
                }

                public static class Of5Not3
                {
                    public static Arbitrary<int> Int()
                    {
                        return Arb.Default.Int32()
                                  .Filter(And(
                                      Not(IsDisibleBy(3)),
                                      IsDisibleBy(5)));
                    }
                }

                public static class Of3And5
                {
                    public static Arbitrary<int> Int()
                    {
                        // Filter not used because too selective (1/15 valid integers)
                        // Map n => 15*n to have enough valid integers (default: 100/1000)
                        return Arb.Default.Int32()
                                  .MapFilter(n => n * 3 * 5, _ => true);
                    }
                }

                public static class Others
                {
                    public static Arbitrary<int> Int()
                    {
                        return Arb.Default.Int32()
                                  .Filter(And(
                                      Not(IsDisibleBy(3)),
                                      Not(IsDisibleBy(5))));
                    }
                }
            }

            public static Func<int, bool> And(Func<int, bool> predicate1, Func<int, bool> predicate2)
            {
                return n => predicate1(n) && predicate2(n);
            }

            public static Func<int, bool> Not(Func<int, bool> predicate)
            {
                return n => !predicate(n);
            }

            public static Func<int, bool> IsDisibleBy(int dividor)
            {
                return n => n % dividor == 0;
            }
        }
    }
}
