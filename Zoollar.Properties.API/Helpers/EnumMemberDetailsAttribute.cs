using System.Runtime.Serialization;

namespace Zoollar.Properties.API.Helpers
{
    [AttributeUsage(AttributeTargets.Field, Inherited = false, AllowMultiple = false)]
    public sealed class EnumMemberDetailsAttribute : Attribute
    {
        private string? _value;
        private string? _iconPath;
        private bool _isValueSetExplicitly;

        public EnumMemberDetailsAttribute()
        {
        }

        public string? Value 
        {
            get => _value;
            set 
            {
                _value= value;
                _isValueSetExplicitly= true;
            }
        }

        public string? IconPath
        {
            get => _iconPath;
            set
            {
                _iconPath = value;
                _isValueSetExplicitly = true;
            }
        }

        public bool IsValueSetExplicitly => _isValueSetExplicitly;
    }
}
