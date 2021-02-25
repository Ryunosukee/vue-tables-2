export default {
    name: 'RLTableBody',
    inject: ['opts', 'theme', 'source','filteredData','tableData','colspan','openChildRows','collapsedGroups', 'scopedSlots','slots', 'componentsOverride','page','limit','groupBy'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts(),
            theme: this.theme,
            source: this.source,
            canToggleGroups: this.opts().toggleGroups,
            collapsedGroups: this.collapsedGroups(),
            data: this.source==='client' ? this.filteredData() : this.tableData(),
            colspan: this.colspan(),
            loading: true,
            hasChildRow: this.opts().childRow || this.scopedSlots()['child_row'],
            openChildRows: this.openChildRows(),
            uniqueRowId: this.opts().uniqueKey,
            groupBy: this.groupBy,
            slots: this.slots(),
            override: this.componentsOverride.tableBody,
            initialIndex: (this.page()-1) * this.limit(),
        })
    }
}



