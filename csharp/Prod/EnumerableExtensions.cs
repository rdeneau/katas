using System.Collections.Generic;

namespace Kata.Prod
{
    public static class EnumerableExtensions
    {
        public static string Join<T>(this IEnumerable<T> @this, string separator)
        {
            return string.Join(separator, @this);
        }
    }
}
