using FsCheck;
using FsCheck.Xunit;
using Kata.Prod;
using Check = NFluent.Check;

namespace Kata.Tests
{
    public class EnumerableExtensionsTests
    {
        public class JoinShould
        {
            [Property(QuietOnSuccess = true)]
            public void Return_The_Item_Given_A_Single_Non_Null_Item_List(NonNull<string> item, string separator)
            {
                var sut = new[] { item.Get };
                var result = sut.Join(separator);
                Check.That(result)
                     .Equals(item.Get);
            }

            [Property(QuietOnSuccess = true)]
            public void Return_The_Items_Concatenated_By_Separator(string item1, string item2, string separator)
            {
                var sut = new[] { item1, item2 };
                var result = sut.Join(separator);
                Check.That(result)
                     .Equals($"{item1}{separator}{item2}");
            }
        }
    }
}
