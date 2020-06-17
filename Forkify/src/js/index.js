import Search from './modals/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
// const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
// const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

/* Global state of the app
    - Search Object
    - Current recipe Object
    - Shopping list Object
    - Liked recipes
*/
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput(); // TODO

    if (query) {
        // 2 New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI from results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. Search for recipers
        await state.search.getResults();

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result)
    };
};

elements.searchForm.addEventListener('click', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    };
});