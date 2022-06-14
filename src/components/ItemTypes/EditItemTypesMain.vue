<template>
    <div id="item-types-container">
        <component :is="$store.state.activeItemTypesView"></component>
        <div id="edit-item-types-main-container" v-if="!$store.state.activeItemTypesView">
            <div id="edit-item-types-btn-grp">
                <b-button @click="viewViewAllItemTypes" size="sm">View All Item Types</b-button>
                <b-button @click="viewCreateItemType" size="sm">Create Item Type</b-button>
                <b-button @click="viewEditItemType" size="sm">Edit Item Type</b-button>
                <b-button @click="viewDeleteItemType" size="sm">Delete Item Type</b-button>
                <div class="line-break">
                </div>    
                <b-button @click="viewViewAllItemTypeGroups" size="sm">View All Item Type Groups</b-button>
                <b-button @click="viewCreateItemTypeGroup" size="sm">Create Item Type Group</b-button>
                <b-button @click="viewEditItemTypeGroup" size="sm">Edit Item Type Group</b-button>
                <b-button @click="viewDeleteItemTypeGroup" size="sm">Delete Item Type Group</b-button>
                <b-button variant="danger" @click="exitView" size="sm">Back</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import CreateItemType from "./CreateItemType"
import CreateItemTypeGroup from "./CreateItemTypeGroup"
import EditItemType from "./EditItemType"
import EditItemTypeGroup from "./EditItemTypeGroup"
import ViewAllItemTypes from "./ViewAllItemTypes"
import ViewAllItemTypeGroups from "./ViewAllItemTypeGroups"
import DeleteItemType from "./DeleteItemType"
import DeleteItemTypeGroup from "./DeleteItemTypeGroup"

export default {
  components: {
    CreateItemType,
    CreateItemTypeGroup,
    EditItemType,
    EditItemTypeGroup,
    ViewAllItemTypes,
    ViewAllItemTypeGroups,
    DeleteItemType,
    DeleteItemTypeGroup
  },
  data() {
    return {
    }
  },
  methods: {
    exitView() {
      this.$store.commit("showNoView")
    },
    viewViewAllItemTypes() {
        this.$store.commit("showViewAllItemTypes")
    },
    viewViewAllItemTypeGroups() {
        this.$store.commit("showViewAllItemTypeGroups")
    },
    viewCreateItemType() {
        this.$store.commit("showCreateItemType")
    },
    viewCreateItemTypeGroup() {
        this.$store.commit("showCreateItemTypeGroup")
    },
    viewEditItemType() {
        this.$store.commit("showEditItemType")
    },
    viewEditItemTypeGroup() {
        this.$store.commit("showEditItemTypeGroup")
    },
    viewDeleteItemType() {
        this.$store.commit("showDeleteItemType")
    },
    viewDeleteItemTypeGroup() {
        this.$store.commit("showDeleteItemTypeGroup")
    }
  },
  beforeDestroy() {
      this.$store.commit("showNoItemTypesViews")
  }
}
</script>

<style>
#edit-item-types-main-container {
    display: flex;
    justify-content: center;
}

#edit-item-types-main-container .btn {
    margin-bottom: 25px;
}

#edit-item-types-btn-grp {
    display: flex;
    flex-direction: column;
    height: 100%;
}

#item-types-container {
    padding: 7px 15px 7px 15px;
}
</style>