// region # Extra
/**
 * Convert a number into a two-digit number as a string.
 * @param number
 * @returns {string}
 */
function toTwoDigitNumber(number) {
    return (number + '').padStart(2, '0');
}

/**
 * Convert a date into a human-readable string.
 * @param date
 * @returns {string}
 */
function composeDate(date) {
    date = new Date(date);
    return toTwoDigitNumber(date.getDate()) + '.'
        + toTwoDigitNumber(date.getMonth() + 1) + '.'
        + date.getFullYear() + ' '
        + toTwoDigitNumber(date.getHours()) + ':'
        + toTwoDigitNumber(date.getMinutes());
}

/**
 * Convert a data object into HTMLTableRowElement's code.
 * @param item
 * @returns {string}
 */
function composeTR(item) {
    return `<tr class="app-table__row">
    <td class="app-table__cell app-table__cell--message">
        <a
            href="${ item['html_url'] }"
            class="app-message__ref"
            target="_blank"
        >
            ${ item.commit.message }
        </a>
    </td>
    <td class="app-table__cell app-table__cell--author">
        <div class="app-author__container">
            <a
                href="${ item.author['html_url'] }"
                class="app-author__ref"
                target="_blank"
            >
                <img
                    src="${ item.author['avatar_url'] }"
                    alt="${ item.author.login }'s avatar"
                    class="app-author__avatar"
                >
            </a>
            &nbsp;
            <a
                href="${ item.author['html_url'] }"
                class="app-author__ref"
                target="_blank"
            >
                <span>${ item.author.login }</span>
            </a>
        </div>
    </td>
    <td class="app-table__cell app-table__cell--date">
        ${ composeDate(item.commit.author.date) }
    </td>
</tr>
`;
}

// endregion # Extra


export class TableView {
    constructor(element) {
        this.element = element;
    }

    render(viewModel) {
        const rows = viewModel.reduce((accumulator, item) => accumulator + composeTR(item), '');
        this.element.innerHTML = '<table class="app-table"><tbody>' + rows + '</tbody></table>';
    }
}
