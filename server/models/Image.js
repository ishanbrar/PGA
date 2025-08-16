const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  originalName: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Background', 'Events', 'Gallery', 'Team', 'Logo', 'Icon']
  },
  page: {
    type: String,
    required: true,
    enum: ['Home', 'About', 'Board', 'Events', 'Schedule', 'Contact', 'Gallery', 'Members']
  },
  size: {
    width: Number,
    height: Number
  },
  fileSize: {
    type: Number,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  tags: [String],
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for efficient queries
imageSchema.index({ category: 1, page: 1 });
imageSchema.index({ isPublished: 1, isFeatured: 1 });
imageSchema.index({ tags: 1 });

// Virtual for full image URL
imageSchema.virtual('fullUrl').get(function() {
  return this.url;
});

// Pre-save middleware
imageSchema.pre('save', function(next) {
  if (this.isModified('alt') || this.isModified('category') || this.isModified('page')) {
    this.lastModifiedAt = new Date();
  }
  next();
});

// Static method to get images by category
imageSchema.statics.getByCategory = function(category, page = null) {
  const query = { category, isPublished: true };
  if (page) query.page = page;
  return this.find(query).sort({ createdAt: -1 });
};

// Static method to get featured images
imageSchema.statics.getFeatured = function() {
  return this.find({ isFeatured: true, isPublished: true }).sort({ createdAt: -1 });
};

// Static method to get page images
imageSchema.statics.getPageImages = function(page) {
  return this.find({ page, isPublished: true }).sort({ category: 1, createdAt: -1 });
};

// Instance method to update metadata
imageSchema.methods.updateMetadata = function(updates) {
  Object.assign(this, updates);
  this.lastModifiedAt = new Date();
  return this.save();
};

// Instance method to soft delete
imageSchema.methods.softDelete = function() {
  this.isPublished = false;
  return this.save();
};

module.exports = mongoose.model('Image', imageSchema);
