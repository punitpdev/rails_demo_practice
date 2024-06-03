//= require active_admin/base

document.addEventListener("DOMContentLoaded", async function () {

  const targetNode = document.getElementsByClassName("sub_categories")[0]
  const config = { attributes: false, childList: true, subtree: false };

  const callback = async (mutationList, observer) => {
    for (const mutation of mutationList) {
      for (const node of mutation.addedNodes) {
        const mapInput = node.getElementsByClassName("goo_map")[0]
        const newElement = document.createElement('div');
        newElement.style.width = '100%';
        newElement.style.height = '400px';
        mapInput.parentNode.insertBefore(newElement, mapInput.nextSibling);

        let map;
        let marker;
        let latLng = { lat: -34.397, lng: 150.644 };
        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(newElement, {
          center: latLng,
          zoom: 8,
          mapId: mapInput.id + "_map",
        });

        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        marker = new AdvancedMarkerElement({
          map: map,
          position: latLng,
        });

      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

})