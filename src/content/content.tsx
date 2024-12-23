const handleDocumentMutations = () => {
  const entitiesDOMNodesForImageParent: NodeListOf<HTMLDivElement> = document.querySelectorAll('[class^="_4WELSP"]')

  // console.log(entitiesDOMNodesForImageParent, "content script");
  if (entitiesDOMNodesForImageParent) {
    return Promise.all(
      Array.from(entitiesDOMNodesForImageParent).map(
        async (entity: HTMLDivElement) => {
          // console.log(entity,'content script entity');
          
        }
      )
    )
  }

}
const documentObserver = new MutationObserver(handleDocumentMutations);
documentObserver.observe(document, { childList: true, subtree: true });