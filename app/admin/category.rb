ActiveAdmin.register Category do
  permit_params :title, :description, sub_categories_attributes: [:title, :description, :category_id, :map]

  form do |f|
    f.inputs do
      f.input :title
      f.input :description
    end
    f.has_many :sub_categories do |sub_category|
      sub_category.input :title
      sub_category.input :description
      sub_category.input :map, input_html: { class: "goo_map" }
    end

    f.actions
  end
end
