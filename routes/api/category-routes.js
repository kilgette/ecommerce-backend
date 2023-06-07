const router = require("express").Router();
const { Category, Product } = require("../../models");



router.get("/", async (req, res) => {
  // find all categories

  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
 
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      res.status(404).json({ message: "Category not found with that id!" });
      return;
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // Create new category
  try {
    const category = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // Update category by id value
  try {
    await Category.update(
      { category_name: req.body.category_name },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // Delete a category by id value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: "Category not found with that id!" });
      return;
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;