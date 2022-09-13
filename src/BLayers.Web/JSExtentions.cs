using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using System.Threading.Tasks;

namespace BLayers.Web
{
    public static class JSExtentions
    {
        public static async Task TriggerClickEvent(this ElementReference elementRef, IJSRuntime js)
        {
            await js.InvokeVoidAsync("mapUndo.clickElement", elementRef);
        }
    }


}
